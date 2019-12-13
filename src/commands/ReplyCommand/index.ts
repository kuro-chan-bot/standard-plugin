import { Command, t } from '@kuro-chan/framework'

export class ReplyCommand extends Command {
  /**
   * Name.
   */
  readonly name = 'reply'

  /**
   * Description.
   */
  readonly description = t('commands.reply.description')

  /**
   * Single arg flag.
   */
  readonly singleArg = true

  /**
   * Run.
   *
   * @param args
   */
  run(args: any[]) {
    return this.reply(args.join(' '))
  }
}
