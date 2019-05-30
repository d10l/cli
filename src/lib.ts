import * as enquirer from 'enquirer'
import * as execa from 'execa'
import * as fs from 'fs'
import { runner } from 'hygen'
import * as Logger from 'hygen/lib/logger'
import * as shell from 'shelljs'

export const getTemplateFolder = async (targetFolder: string, templateSourceUrl: string) => {
  if (fs.existsSync(targetFolder)) {
    await pullAndCreateFiles(targetFolder)
  } else {
    await cloneAndCreateFiles(targetFolder, templateSourceUrl)
  }
}

function checkGitExists() {
  if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git')
    shell.exit(1)
  }
}

const pullAndCreateFiles = async (pathToRepo: string) => {
  checkGitExists()
  console.log('template folder exist, check for new version.')
  shell.exec(`cd ${pathToRepo} && git pull`)
}

const cloneAndCreateFiles = async (targetFolder: string, templateSourceUrl: string) => {
  checkGitExists()
  shell.exec(`mkdir ${targetFolder} && cd ${targetFolder} && git clone --depth 1 ${templateSourceUrl} .`)
}

export const runTemplate = async (dir: string, params: object) => {
  await runner(params, {
    templates: dir,
    cwd: process.cwd(),
    logger: new Logger(console.log.bind(console)),
    createPrompter: () => enquirer,
    exec: (action: string, body: string) => {
      const opts = body && body.length > 0 ? { input: body } : {}
      return execa.shell(action, opts)
    },
    debug: !!process.env.DEBUG
  })
}
