import {
  Command,
  ParseMessage,
  t,
  CommandRequest,
  RichEmbed
} from '@kuro-chan/framework'

/**
 * Ping command.
 */
export class PingCommand extends Command {
  /**
   * Name.
   */
  name = 'ping'

  /**
   * Description.
   */
  description = t('commands.ping.description')

  /**
   * Run.
   */
  run(args: any[], { message: { createdTimestamp } }: CommandRequest) {
    const translator = this.bot.translator
    const embed = new RichEmbed()

    embed
      .setTitle(translator.translate('commands.ping.measureResult'))
      .addField(
        translator.translate('commands.ping.WebSocket'),
        this.context.client.ping + ` ms`
      )
      .addField(
        translator.translate('commands.ping.message'),
        this.getPing(createdTimestamp) + ' ms'
      )

    return this.reply({
      embed
    })
  }

  /**
   * Pipe.
   *
   * @param args
   * @param param1
   */
  pipe(args: any[], { message: { createdTimestamp } }: ParseMessage) {
    return [this.getPing(createdTimestamp)]
  }

  /**
   * Get ping.
   *
   * @param timestamp
   */
  getPing(timestamp: number) {
    return Date.now() - timestamp
  }
}
