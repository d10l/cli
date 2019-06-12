import Command from '@oclif/command'

import { getTemplateFolder, runTemplate } from '../../lib'

export class AddService extends Command {
  static description = 'add a service based on aws lambda'

  async run() {
    console.log('Adding service template based on AWS lambda functions and pulumi')
    const targetFolder = './_templates'
    const templateFolderUrl = 'https://github.com/d10l/templates.git'
    await getTemplateFolder(targetFolder, templateFolderUrl)
    const template = 'aws-functions'
    const action = 'service'
    await runTemplate(targetFolder, [template, action])
  }
}
