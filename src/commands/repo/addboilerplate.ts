import Command from '@oclif/command'

import { getTemplateFolder, runTemplate } from '../../lib'

export class AddBoilerplate extends Command {
  static description = 'Adding repo boilerplate include README.md and repo structure.'

  static examples = [
    `$ den repo:addboilerplate`,
  ]

  async run() {
    const targetFolder = './_templates'
    const templateFolderUrl = 'https://github.com/d10l/templates.git'
    await getTemplateFolder(targetFolder, templateFolderUrl)
    const template = 'git-repo'
    const action = 'create'
    await runTemplate(targetFolder, [template, action])
  }
}