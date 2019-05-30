import { Command } from '@oclif/command'
import * as opn from 'opn'

import { getTemplateFolder, runTemplate } from '../../lib'

export class AddGuidelineAgent extends Command {
  static description = 'adding git guideline agent to repo'

  async run() {
    const targetFolder = './_templates'
    const templateFolderUrl = 'https://github.com/d10l/templates.git'
    await getTemplateFolder(targetFolder, templateFolderUrl)
    const template = 'git-pullrequest-agent'
    const action = 'create'
    await runTemplate(targetFolder, [template, action])
    opn('https://zappr.opensource.zalan.do/login')
  }
}
