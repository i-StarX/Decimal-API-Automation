import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';

export default class AIEngine {

  async web_spec_creator(filename: string) {
    const csvFilePath = await path.resolve(`${process.cwd()}/app/csv_files`, filename);

    const headers = ['TC_Reference', 'TC_description', 'Action', 'Test_Data', 'Test_Spec_FileName', 'Tag', 'Parent_Folder_Name', 'Locator_Type', 'Role', 'Element_Locator'];

    const fileContent = await fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

    await parse(fileContent, {
      delimiter: ',',
      columns: headers,
    }, async (error: any, result: any) => {
      if (error) {
        console.error(error);
      }

      console.log("------------------------------")
      console.log("Generating web spec started...")

      await this.spec_writer(result)

      console.log("Web spec generation completed!")
      console.log("------------------------------")
    });
  };

  async spec_writer(result: any) {
    let template = await fs.readFileSync(`${process.cwd()}/app/template/spec_template.txt`, { encoding: 'utf-8' });

    let filePath = '';
    let steps = '';

    let i = 1;
    while (i < result.length) {
      if (result[i].Parent_Folder_Name != '' && result[i].Test_Spec_FileName != '') {
        if (!fs.existsSync(result[i].Parent_Folder_Name)) {
          fs.mkdirSync(path.resolve(`${process.cwd()}/tests/${result[i].Parent_Folder_Name}`), { recursive: true });
        }

        fs.writeFileSync(path.resolve(`${process.cwd()}/tests/${result[i].Parent_Folder_Name}`, result[i].Test_Spec_FileName), '', {
          flag: "w"
        })

        filePath = `${process.cwd()}/tests/${result[i].Parent_Folder_Name}/${result[i].Test_Spec_FileName}`;
        await fs.appendFileSync(filePath, template);

        await this.updateContent(filePath, 'TC_NAME', result[i].TC_Reference);
        await this.updateContent(filePath, 'TAG', result[i].Tag);

        while (result[i].TC_description != 'Test case description') {

          if (await result[i].Action == 'goto') {
            console.log('Go to step created...');
            steps = steps + `\nawait page.goto('${result[i].Test_Data}');\n`
          }
          if (await result[i].Action == 'fill') {
            console.log('Fill step created...');
            if (await result[i].Locator_Type == 'testId') {
              steps = steps + `\nawait page.getByTestId('${result[i].Element_Locator}').fill('${result[i].Test_Data}');\n`
            }
            if (await result[i].Locator_Type == 'label') {
              steps = steps + `\nawait page.getByLabel('${result[i].Element_Locator}').fill('${result[i].Test_Data}');\n`
            }
            if (await result[i].Locator_Type == 'role') {
              steps = steps + `\nawait page.getByRole('${result[i].Role}', {name : '${result[i].Element_Locator}'}).fill('${result[i].Test_Data}');\n`
            }
            if (await result[i].Locator_Type == 'locator') {
              steps = steps + `\nawait page.locator('${result[i].Element_Locator}').fill('${result[i].Test_Data}');\n`
            }
            if (await result[i].Locator_Type == 'text') {
              steps = steps + `\nawait page.getByText('${result[i].Element_Locator}').fill('${result[i].Test_Data}');\n`
            }
            if (await result[i].Locator_Type == 'altText') {
              steps = steps + `\nawait page.getByAltText('${result[i].Element_Locator}').fill('${result[i].Test_Data}');\n`
            }
          }
          if (await result[i].Action == 'click') {
            console.log('Click step created...');
            if (await result[i].Locator_Type == 'testId') {
              steps = steps + `\nawait page.getByTestId('${result[i].Element_Locator}').click();\n`
            }
            if (await result[i].Locator_Type == 'label') {
              steps = steps + `\nawait page.getByLabel('${result[i].Element_Locator}').click();\n`
            }
            if (await result[i].Locator_Type == 'role') {
              steps = steps + `\nawait page.getByRole('${result[i].Role}', {name : '${result[i].Element_Locator}'}).click();\n`
            }
            if (await result[i].Locator_Type == 'locator') {
              steps = steps + `\nawait page.locator('${result[i].Element_Locator}').click();\n`
            }
            if (await result[i].Locator_Type == 'text') {
              steps = steps + `\nawait page.getByText('${result[i].Element_Locator}').click();\n`
            }
            if (await result[i].Locator_Type == 'altText') {
              steps = steps + `\nawait page.getByAltText('${result[i].Element_Locator}').click();\n`
            }
          }

          if (await result[i].Action == 'verify - visible') {
            console.log('Verification step created...');
            if (await result[i].Locator_Type == 'testId') {
              steps = steps + `\nawait expect(page.getByTestId('${result[i].Element_Locator}')).toBeVisible();\n`
            }
            if (await result[i].Locator_Type == 'label') {
              steps = steps + `\nawait expect(page.getByLabel('${result[i].Element_Locator}')).toBeVisible();\n`
            }
            if (await result[i].Locator_Type == 'role') {
              steps = steps + `\nawait expect(page.getByRole('${result[i].Role}', {name : '${result[i].Element_Locator}'})).toBeVisible();\n`
            }
            if (await result[i].Locator_Type == 'locator') {
              steps = steps + `\nawait expect(page.locator('${result[i].Element_Locator}')).toBeVisible();\n`
            }
            if (await result[i].Locator_Type == 'text') {
              steps = steps + `\nawait expect(page.getByText('${result[i].Element_Locator}')).toBeVisible();\n`
            }
            if (await result[i].Locator_Type == 'altText') {
              steps = steps + `\nawait expect(page.getByAltText('${result[i].Element_Locator}')).toBeVisible();\n`
            }
          }

          if (await result[i].Action == 'verify - enable') {
            console.log('Verification step created...');
            if (await result[i].Locator_Type == 'testId') {
              steps = steps + `\nawait expect(page.getByTestId('${result[i].Element_Locator}')).toBeEnabled();\n`
            }
            if (await result[i].Locator_Type == 'label') {
              steps = steps + `\nawait expect(page.getByLabel('${result[i].Element_Locator}')).toBeEnabled();\n`
            }
            if (await result[i].Locator_Type == 'role') {
              steps = steps + `\nawait expect(page.getByRole('${result[i].Role}', {name : '${result[i].Element_Locator}'})).toBeEnabled();\n`
            }
            if (await result[i].Locator_Type == 'locator') {
              steps = steps + `\nawait expect(page.locator('${result[i].Element_Locator}')).toBeEnabled();\n`
            }
            if (await result[i].Locator_Type == 'text') {
              steps = steps + `\nawait expect(page.getByText('${result[i].Element_Locator}')).toBeEnabled();\n`
            }
            if (await result[i].Locator_Type == 'altText') {
              steps = steps + `\nawait expect(page.getByAltText('${result[i].Element_Locator}')).toBeEnabled();\n`
            }

          }

          if (await result[i].Action == 'verify - url') {
            console.log('Verification step created...');
            let escaped_string = result[i].Test_Data.replace(/\//g, '\\/');
            steps = steps + `\nawait expect(page).toHaveURL(/${escaped_string}/);\n`
          }

          if (await result[i].Action == 'verify - value') {
            console.log('Verification step created...');
            steps = steps + `\nawait expect(page.locator('${result[i].Element_Locator}')).toHaveValue('${result[i].Test_Data}');\n`
          }
          i++;
          try {
            result[i].TC_description
          } catch (error) {
            break;
          }
        }
      }
      await this.updateContent(filePath, 'STEPS', steps);
      i++;
      steps = '';
    }



  }

  async api_spec_creator(filename: any) {
    const csvFilePath = await path.resolve(`${process.cwd()}/app/csv_files`, filename);

    const headers = ['TC_Reference', 'Request_Type', 'API_URL', 'Response_Code', 'Headers', 'Authetication_Bearer_Token', 'Parameter', 'Request_Body', 'Response_Body', 'Test_Spec_FileName', 'Parent_Folder_Name', 'Tag'];

    const fileContent = await fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

    await parse(fileContent, {
      delimiter: ',',
      columns: headers,
    }, (error: any, result: any) => {
      if (error) {
        console.error(error);
      }
      this.api_spec_writer(result)
    });
  }

  async api_spec_writer(result: any) {
    let template = await fs.readFileSync(`${process.cwd()}/app/template/api_spec_template.txt`, { encoding: 'utf-8' });

    for (let i = 1; i < result.length; i++) {

      let filePath = `${process.cwd()}/tests/${result[i].Parent_Folder_Name}/${result[i].Test_Spec_FileName}`;
      console.log("------------------------------")
      console.log("Generating api spec started...")

      console.log(`Writing ${result[i].Request_Type} request test...`)

      if (!fs.existsSync(result[i].Parent_Folder_Name)) {
        fs.mkdirSync(path.resolve(`${process.cwd()}/tests/${result[i].Parent_Folder_Name}`), { recursive: true });
      }

      fs.writeFileSync(path.resolve(`${process.cwd()}/tests/${result[i].Parent_Folder_Name}`, result[i].Test_Spec_FileName), '', {
        flag: "w"
      })
      fs.appendFileSync(filePath, template);

      let requestBody = "";
      let parameter = "";
      let responseBody = "";
      let header = "";
      let api_url = result[i].API_URL;

      if (await result[i].Request_Body !== "") {
        console.log('Creating request body...');
        requestBody = `data: ${result[i].Request_Body},`
      }
      if (await result[i].Response_Body !== "") {
        console.log('Creating response body assertion...');
        responseBody = `
        apiResponse.body().then(body => {
            let expected = '${result[i].Response_Body.replace(/(\r\n|\n|\r)/gm, "")}';
            expect(body.toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
        });`
      }
      if (await result[i].Parameter !== "") {
        console.log('Creating parameter...');
        api_url = api_url.replace("{", "${")
        parameter = `let ${result[i].Parameter};`
      }
      if (await result[i].Headers !== "") {
        console.log('Creating Headers...');
        header = `headers: ${result[i].Headers},`
      }

      await this.updateContent(filePath, 'TC_NAME', result[i].TC_Reference);
      await this.updateContent(filePath, 'TAG', result[i].Tag);
      await this.updateContent(filePath, 'API_URL', api_url);
      await this.updateContent(filePath, 'REQUEST_TYPE', result[i].Request_Type);
      await this.updateContent(filePath, 'HEADERS', header);
      await this.updateContent(filePath, 'DATA', requestBody);
      await this.updateContent(filePath, 'PARAMETER', parameter);
      await this.updateContent(filePath, 'RESPONSE_BODY', responseBody);

      console.log("API spec generation completed!")
      console.log("------------------------------")
    }

  }

  async updateContent(readFilePath: string, contentToReplace: string, newContent: string) {
    let content = await fs.promises.readFile(readFilePath, 'utf-8');
    let updatedContent = await content.replace(new RegExp(contentToReplace, 'g'), newContent);
    await fs.promises.writeFile(readFilePath, updatedContent, 'utf-8');
  }

}