import { Command, t } from '@kuro-chan/framework'

/**
 * Raw command.
 */
export class RawCommand extends Command {
  /**
   * Name.
   */
  readonly name = 'raw'

  /**
   * Description.
   */
  readonly description = t('commands.raw.description')

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

  /**
   * Pipe.
   *
   * @param args
   */
  pipe(args: any[]) {
    return args
  }
}
