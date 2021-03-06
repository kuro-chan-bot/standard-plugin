/**
 * English.
 */
export const en = {
  commands: {
    help: {
      description: 'Show help',
      args: {
        commandName: {
          description: 'Command name'
        }
      }
    },
    ping: {
      description: 'Measure ping.',
      measureResult: 'Measure result',
      WebSocket: 'WebSocket',
      message: 'Message'
    },
    raw: {
      description: 'Return raw args.'
    },
    reply: {
      description: 'Reply raw args.'
    }
  },
  standardPlugin: {
    version: 'Version',
    beta: 'Beta',
    prefixes: 'Prefixes',
    aliases: 'Aliases',
    args: 'Args',
    usage: 'Usage',
    description: 'Description',
    noDescriptionProvided: 'No description provided.',
    type: 'Type',
    types: {
      Any: 'Any',
      Boolean: 'Boolean',
      Number: 'Number',
      String: 'String',
      Unknown: 'Unknown type'
    }
  }
}
