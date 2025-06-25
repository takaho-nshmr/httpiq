import { StatusCode } from '../types/index.js';

export const statusCodes: StatusCode[] = [
  // Beginner level - Daily codes
  {
    code: 200,
    meaning: 'OK',
    description: 'The request has succeeded',
    descriptionJa: 'リクエストが成功しました',
    difficulty: 'beginner',
  },
  {
    code: 201,
    meaning: 'Created',
    description: 'The request has been fulfilled and resulted in a new resource being created',
    descriptionJa: 'リクエストが完了し、新しいリソースが作成されました',
    difficulty: 'beginner',
  },
  {
    code: 301,
    meaning: 'Moved Permanently',
    description: 'The requested resource has been assigned a new permanent URI',
    descriptionJa: 'リクエストされたリソースは新しいURIに恒久的に移動しました',
    difficulty: 'beginner',
  },
  {
    code: 302,
    meaning: 'Found',
    description: 'The requested resource resides temporarily under a different URI',
    descriptionJa: 'リクエストされたリソースは一時的に別のURIに移動しています',
    difficulty: 'beginner',
  },
  {
    code: 400,
    meaning: 'Bad Request',
    description: 'The request could not be understood by the server due to malformed syntax',
    descriptionJa: 'リクエストの構文が正しくないため、サーバーが理解できませんでした',
    difficulty: 'beginner',
  },
  {
    code: 401,
    meaning: 'Unauthorized',
    description: 'The request requires user authentication',
    descriptionJa: 'このリクエストにはユーザー認証が必要です',
    difficulty: 'beginner',
  },
  {
    code: 403,
    meaning: 'Forbidden',
    description: 'The server understood the request, but is refusing to fulfill it',
    descriptionJa: 'サーバーはリクエストを理解しましたが、実行を拒否しています',
    difficulty: 'beginner',
  },
  {
    code: 404,
    meaning: 'Not Found',
    description: 'The server has not found anything matching the Request-URI',
    descriptionJa: 'サーバーはリクエストされたURIに一致するものを見つけられませんでした',
    difficulty: 'beginner',
  },
  {
    code: 500,
    meaning: 'Internal Server Error',
    description: 'The server encountered an unexpected condition',
    descriptionJa: 'サーバーで予期しないエラーが発生しました',
    difficulty: 'beginner',
  },
  {
    code: 503,
    meaning: 'Service Unavailable',
    description: 'The server is currently unable to handle the request',
    descriptionJa: 'サーバーは現在リクエストを処理できません',
    difficulty: 'beginner',
  },

  // Intermediate level - Developer codes
  {
    code: 202,
    meaning: 'Accepted',
    description:
      'The request has been accepted for processing, but the processing has not been completed',
    descriptionJa: 'リクエストは処理のために受け入れられましたが、処理はまだ完了していません',
    difficulty: 'intermediate',
  },
  {
    code: 204,
    meaning: 'No Content',
    description: 'The server has fulfilled the request but does not need to return an entity-body',
    descriptionJa: 'サーバーはリクエストを満たしましたが、返すコンテンツがありません',
    difficulty: 'intermediate',
  },
  {
    code: 206,
    meaning: 'Partial Content',
    description: 'The server has fulfilled the partial GET request for the resource',
    descriptionJa: 'サーバーはリソースの部分的なGETリクエストを満たしました',
    difficulty: 'intermediate',
  },
  {
    code: 304,
    meaning: 'Not Modified',
    description: 'The resource has not been modified since the last request',
    descriptionJa: 'リソースは前回のリクエスト以降変更されていません',
    difficulty: 'intermediate',
  },
  {
    code: 307,
    meaning: 'Temporary Redirect',
    description: 'The requested resource resides temporarily under a different URI',
    descriptionJa: 'リクエストされたリソースは一時的に別のURIに移動しています',
    difficulty: 'intermediate',
  },
  {
    code: 308,
    meaning: 'Permanent Redirect',
    description: 'The target resource has been assigned a new permanent URI',
    descriptionJa: '対象リソースに新しい恒久的なURIが割り当てられました',
    difficulty: 'intermediate',
  },
  {
    code: 405,
    meaning: 'Method Not Allowed',
    description: 'The method specified in the Request-Line is not allowed',
    descriptionJa: 'リクエストで指定されたメソッドは許可されていません',
    difficulty: 'intermediate',
  },
  {
    code: 408,
    meaning: 'Request Timeout',
    description:
      'The client did not produce a request within the time that the server was prepared to wait',
    descriptionJa: 'クライアントがサーバーが待機する時間内にリクエストを送信しませんでした',
    difficulty: 'intermediate',
  },
  {
    code: 409,
    meaning: 'Conflict',
    description:
      'The request could not be completed due to a conflict with the current state of the resource',
    descriptionJa: 'リソースの現在の状態との競合により、リクエストを完了できませんでした',
    difficulty: 'intermediate',
  },
  {
    code: 422,
    meaning: 'Unprocessable Entity',
    description: 'The request was well-formed but was unable to be followed due to semantic errors',
    descriptionJa: 'リクエストは正しい形式でしたが、意味的なエラーにより処理できませんでした',
    difficulty: 'intermediate',
  },
  {
    code: 429,
    meaning: 'Too Many Requests',
    description: 'The user has sent too many requests in a given amount of time',
    descriptionJa: 'ユーザーが所定の時間内に送信したリクエストが多すぎます',
    difficulty: 'intermediate',
  },
  {
    code: 502,
    meaning: 'Bad Gateway',
    description: 'The server received an invalid response from the upstream server',
    descriptionJa: 'サーバーは上流サーバーから無効な応答を受信しました',
    difficulty: 'intermediate',
  },
  {
    code: 504,
    meaning: 'Gateway Timeout',
    description: 'The server did not receive a timely response from the upstream server',
    descriptionJa: 'サーバーは上流サーバーから適時な応答を受信しませんでした',
    difficulty: 'intermediate',
  },

  // Advanced level - Rare codes
  {
    code: 100,
    meaning: 'Continue',
    description: 'The client should continue with its request',
    descriptionJa: 'クライアントはリクエストを続行する必要があります',
    difficulty: 'advanced',
  },
  {
    code: 102,
    meaning: 'Processing',
    description: 'The server has accepted the request, but has not yet completed it',
    descriptionJa: 'サーバーはリクエストを受け付けましたが、まだ処理が完了していません',
    difficulty: 'advanced',
  },
  {
    code: 206,
    meaning: 'Partial Content',
    description: 'The server has fulfilled the partial GET request for the resource',
    descriptionJa: 'サーバーはリソースの部分的なGETリクエストを正常に処理しました',
    difficulty: 'advanced',
  },
  {
    code: 300,
    meaning: 'Multiple Choices',
    description: 'The requested resource has multiple representations',
    descriptionJa: 'リクエストされたリソースには複数の表現があります',
    difficulty: 'advanced',
  },
  {
    code: 307,
    meaning: 'Temporary Redirect',
    description: 'The requested resource resides temporarily under a different URI',
    descriptionJa: 'リクエストされたリソースは一時的に別のURIに移動しています',
    difficulty: 'advanced',
  },
  {
    code: 308,
    meaning: 'Permanent Redirect',
    description: 'The target resource has been assigned a new permanent URI',
    descriptionJa: '対象リソースには新しい永続的なURIが割り当てられました',
    difficulty: 'advanced',
  },
  {
    code: 402,
    meaning: 'Payment Required',
    description: 'Reserved for future use',
    descriptionJa: '将来の使用のために予約されています',
    difficulty: 'advanced',
  },
  {
    code: 406,
    meaning: 'Not Acceptable',
    description: 'The resource is not available in a format acceptable to the client',
    descriptionJa: 'リソースはクライアントが受け入れ可能な形式では利用できません',
    difficulty: 'advanced',
  },
  {
    code: 410,
    meaning: 'Gone',
    description: 'The requested resource is no longer available and will not be available again',
    descriptionJa: 'リクエストされたリソースは利用できなくなり、今後も利用できません',
    difficulty: 'advanced',
  },
  {
    code: 411,
    meaning: 'Length Required',
    description: 'The request did not specify the length of its content',
    descriptionJa: 'リクエストでコンテンツの長さが指定されていません',
    difficulty: 'advanced',
  },
  {
    code: 413,
    meaning: 'Payload Too Large',
    description: 'The request is larger than the server is willing or able to process',
    descriptionJa: 'リクエストのサイズがサーバーが処理可能な範囲を超えています',
    difficulty: 'advanced',
  },
  {
    code: 415,
    meaning: 'Unsupported Media Type',
    description: 'The request entity has a media type which the server does not support',
    descriptionJa: 'リクエストのメディアタイプはサーバーでサポートされていません',
    difficulty: 'advanced',
  },
  {
    code: 418,
    meaning: "I'm a teapot",
    description: 'The server refuses to brew coffee because it is a teapot (April Fools joke)',
    descriptionJa:
      'サーバーはティーポットなのでコーヒーを淹れることを拒否します（エイプリルフールのジョーク）',
    difficulty: 'advanced',
  },
  {
    code: 422,
    meaning: 'Unprocessable Entity',
    description: 'The request was well-formed but was unable to be followed due to semantic errors',
    descriptionJa: 'リクエストの形式は正しいですが、セマンティックエラーのため処理できません',
    difficulty: 'advanced',
  },
  {
    code: 451,
    meaning: 'Unavailable For Legal Reasons',
    description: 'The server is denying access to the resource as a consequence of a legal demand',
    descriptionJa: '法的な要求により、サーバーはリソースへのアクセスを拒否しています',
    difficulty: 'advanced',
  },
  {
    code: 501,
    meaning: 'Not Implemented',
    description: 'The server does not support the functionality required to fulfill the request',
    descriptionJa: 'サーバーはリクエストを処理するために必要な機能をサポートしていません',
    difficulty: 'advanced',
  },
  {
    code: 502,
    meaning: 'Bad Gateway',
    description: 'The server received an invalid response from the upstream server',
    descriptionJa: 'サーバーは上位サーバーから無効なレスポンスを受信しました',
    difficulty: 'advanced',
  },
  {
    code: 504,
    meaning: 'Gateway Timeout',
    description: 'The server did not receive a timely response from the upstream server',
    descriptionJa: 'サーバーは上位サーバーから時間内にレスポンスを受信できませんでした',
    difficulty: 'advanced',
  },
  {
    code: 507,
    meaning: 'Insufficient Storage',
    description: 'The server is unable to store the representation needed to complete the request',
    descriptionJa: 'サーバーはリクエストを完了するために必要な表現を保存できません',
    difficulty: 'advanced',
  },
  {
    code: 511,
    meaning: 'Network Authentication Required',
    description: 'The client needs to authenticate to gain network access',
    descriptionJa: 'クライアントはネットワークアクセスを取得するために認証が必要です',
    difficulty: 'advanced',
  },
];

export const getStatusCodesByDifficulty = (
  difficulty: 'beginner' | 'intermediate' | 'advanced'
): StatusCode[] => {
  return statusCodes.filter(code => code.difficulty === difficulty);
};

export const getQuestionCount = (difficulty: 'beginner' | 'intermediate' | 'advanced'): number => {
  switch (difficulty) {
    case 'beginner':
      return 5;
    case 'intermediate':
      return 10;
    case 'advanced':
      return 20;
  }
};

export const getQuestionsForDifficulty = (
  difficulty: 'beginner' | 'intermediate' | 'advanced'
): StatusCode[] => {
  const beginnerCodes = statusCodes.filter(code => code.difficulty === 'beginner');
  const intermediateCodes = statusCodes.filter(code => code.difficulty === 'intermediate');
  const advancedCodes = statusCodes.filter(code => code.difficulty === 'advanced');

  const shuffle = (array: StatusCode[]): StatusCode[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  switch (difficulty) {
    case 'beginner':
      // 初級問題から5問ランダム選択
      return shuffle(beginnerCodes).slice(0, 5);

    case 'intermediate':
      // 初級問題から最大5問、中級問題から残りを選択して合計10問
      const shuffledBeginner = shuffle(beginnerCodes);
      const shuffledIntermediate = shuffle(intermediateCodes);
      const beginnerCount = Math.min(5, shuffledBeginner.length);
      const intermediateCount = 10 - beginnerCount;

      return [
        ...shuffledBeginner.slice(0, beginnerCount),
        ...shuffledIntermediate.slice(0, intermediateCount),
      ];

    case 'advanced':
      // 初級・中級問題から合計最大10問、上級問題から残りを選択して合計20問
      const allBeginnerIntermediate = [...beginnerCodes, ...intermediateCodes];
      const shuffledBeginnerIntermediate = shuffle(allBeginnerIntermediate);
      const shuffledAdvanced = shuffle(advancedCodes);
      const beginnerIntermediateCount = Math.min(10, shuffledBeginnerIntermediate.length);
      const advancedCount = 20 - beginnerIntermediateCount;

      return [
        ...shuffledBeginnerIntermediate.slice(0, beginnerIntermediateCount),
        ...shuffledAdvanced.slice(0, advancedCount),
      ];
  }
};
