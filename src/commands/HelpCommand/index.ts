import {
  Command,
  ArgumentDefinition,
  CommandRequest,
  RichEmbed,
  CommandInterface,
  ArgumentType,
  t
} from '@kuro-chan/framework'

/**
 * Help command.
 */
export class HelpCommand extends Command {
  /**
   * Max command names.
   */
  readonly maxCommandNames = 10

  /**
   * Name.
   */
  readonly name = 'help'

  /**
   * Description.
   */
  readonly description = t('commands.help.description')

  /**
   * Args.
   */
  readonly args: ArgumentDefinition[] = [
    {
      name: 'commandName',
      required: false,
      description: t('commands.help.args.commandName.description'),
      candidates: () => {
        const names = this.bot.commands.map(({ name }) => name)
        return names.length > this.maxCommandNames
          ? names.slice(0, this.maxCommandNames)
          : names
      }
    }
  ]

  /**
   * Run.
   */
  run([command]: [string?], request: CommandRequest) {
    if (command) {
      return this.respondCommand(command, request)
    } else {
      return this.respondHelp(request)
    }
  }

  /**
   * Respond command.
   *
   * @param commandName
   */
  private respondCommand(commandName: string, request: CommandRequest) {
    const command = this.bot.commands.find(
      command => command.name === commandName
    )
    if (!command) {
      return this.error(`Command "${commandName}" is not found.`)
    }

    const embed = new RichEmbed()
    const usage = this.getCommandUsage(command, request.prefix)
    const translator = this.bot.translator
    const description =
      typeof command.description === 'string'
        ? command.description
        : translator.translate(command.description) ||
          translator.translate('standardPlugin.noDescriptionProvided')

    embed
      .setTitle(command.name)
      .setColor(this.bot.color)
      .setDescription(description)
      .addField(translator.translate('standardPlugin.usage'), '`' + usage + '`')

    let argsHelp = ''
    for (const arg of command.compiledArgs) {
      const name =
        typeof arg.name === 'string' ? arg.name : translator.translate(arg.name)
      const type = translator.translate(this.createArgumentTranslate(arg.type))
      const description =
        typeof arg.description === 'string'
          ? arg.description
          : translator.translate(arg.description)

      argsHelp += `> \`${name}: ${type}\` *${description}*\n`
    }

    if (argsHelp) {
      embed.addField(translator.translate('standardPlugin.args'), argsHelp)
    }

    return this.reply({ embed })
  }

  /**
   * Respond help.
   */
  private respondHelp(request: CommandRequest) {
    const commands = this.bot.commands
    const embed = new RichEmbed()
    const translator = this.bot.translator

    embed
      .setTitle(`${this.bot.name}`)
      .setThumbnail(this.context.client.user.displayAvatarURL)
      .setColor(this.bot.color)
      .addField(
        translator.translate('standardPlugin.version'),
        this.bot.versionString +
          (this.bot.isBetaVersion
            ? `<${translator.translate('standardPlugin.beta')}>`
            : '')
      )
      .addField(
        translator.translate('standardPlugin.prefixes'),
        this.bot.prefixes.join(' ')
      )

    for (const command of commands) {
      const description =
        typeof command.description === 'string'
          ? command.description ||
            translator.translate('standardPlugin.noDescriptionProvided')
          : translator.translate(command.description)
      embed.addField(request.prefix + command.name, description, true)
    }

    return this.reply({
      embed
    })
  }

  /**
   * Get command usage.
   *
   * @param command
   */
  private getCommandUsage(command: CommandInterface, prefix: string) {
    let usage = `${prefix}${command.name} `

    if (command.singleArg) {
      usage += '[...args]'
    } else {
      usage += command.compiledArgs
        .map(arg => {
          const name = arg.candidates()
            ? `(${arg.candidates().join('|')})`
            : arg.name
          return `[${name}${arg.required ? '' : '?'}]`
        })
        .join(' ')
    }

    return usage
  }

  /**
   * Create argument translate.
   *
   * @param type
   */
  private createArgumentTranslate(type: ArgumentType) {
    switch (type) {
      case ArgumentType.Any:
        return t('standardPlugin.types.Any')
      case ArgumentType.Boolean:
        return t('standardPlugin.types.Boolean')
      case ArgumentType.Number:
        return t('standardPlugin.types.Number')
      case ArgumentType.String:
        return t('standardPlugin.types.String')
    }
    return t('standardPlugin.types.Unknown')
  }
}
