/**
 * Japanese.
 */
export const ja = {
  commands: {
    help: {
      description: 'ヘルプを表示します。',
      args: {
        commandName: {
          description: '対象のコマンド'
        }
      }
    },
    ping: {
      description: 'ピン値を計測します。'
    },
    raw: {
      description: '引数をそのまま返します。'
    },
    reply: {
      description: '引数をそのまま返信します。'
    }
  },
  standardPlugin: {
    version: 'バージョン',
    beta: 'ベータ',
    prefixes: 'プレフィックス',
    args: '引数',
    usage: '使用方法',
    description: '説明',
    noDescriptionProvided: '説明がありません。',
    type: '型',
    types: {
      Any: '任意型',
      Boolean: '論理型',
      Number: '数値型',
      String: '文字列型',
      Unknown: '不明な型'
    }
  }
}
