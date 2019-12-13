import { HelpCommand } from './commands/HelpCommand'
import { PingCommand } from './commands/PingCommand'
import { RawCommand } from './commands/RawCommand'
import { ReplyCommand } from './commands/ReplyCommand'
import { Plugin, BotInterface } from '@kuro-chan/framework'
import { ConsoleLogger } from './loggers/ConsoleLogger'
import { en } from './locale/en'
import { ja } from './locale/ja'

/**
 * Standard plugin.
 */
export class StandardPlugin extends Plugin {
  /**
   * Commands.
   */
  commands = [
    new HelpCommand(),
    new PingCommand(),
    new RawCommand(),
    new ReplyCommand()
  ]

  /**
   * Loggers.
   */
  loggers = [new ConsoleLogger()]

  /**
   * Language set.
   */
  languageSet = {
    en,
    ja
  }

  /**
   * Install.
   *
   * @param bot
   */
  install(bot: BotInterface) {
    super.install(bot)
    bot.info('Installed standard plugin.')
  }
}

/**
 * Export default.
 */
export default StandardPlugin
