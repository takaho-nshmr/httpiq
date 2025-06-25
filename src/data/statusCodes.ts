import { StatusCode } from '../types/index.js';

export const statusCodes: StatusCode[] = [
  // Beginner level - Daily codes
  { code: 200, meaning: 'OK', description: 'The request has succeeded', difficulty: 'beginner' },
  {
    code: 201,
    meaning: 'Created',
    description: 'The request has been fulfilled and resulted in a new resource being created',
    difficulty: 'beginner',
  },
  {
    code: 301,
    meaning: 'Moved Permanently',
    description: 'The requested resource has been assigned a new permanent URI',
    difficulty: 'beginner',
  },
  {
    code: 302,
    meaning: 'Found',
    description: 'The requested resource resides temporarily under a different URI',
    difficulty: 'beginner',
  },
  {
    code: 400,
    meaning: 'Bad Request',
    description: 'The request could not be understood by the server due to malformed syntax',
    difficulty: 'beginner',
  },
  {
    code: 401,
    meaning: 'Unauthorized',
    description: 'The request requires user authentication',
    difficulty: 'beginner',
  },
  {
    code: 403,
    meaning: 'Forbidden',
    description: 'The server understood the request, but is refusing to fulfill it',
    difficulty: 'beginner',
  },
  {
    code: 404,
    meaning: 'Not Found',
    description: 'The server has not found anything matching the Request-URI',
    difficulty: 'beginner',
  },
  {
    code: 500,
    meaning: 'Internal Server Error',
    description: 'The server encountered an unexpected condition',
    difficulty: 'beginner',
  },
  {
    code: 503,
    meaning: 'Service Unavailable',
    description: 'The server is currently unable to handle the request',
    difficulty: 'beginner',
  },

  // Intermediate level - Developer codes
  {
    code: 202,
    meaning: 'Accepted',
    description:
      'The request has been accepted for processing, but the processing has not been completed',
    difficulty: 'intermediate',
  },
  {
    code: 204,
    meaning: 'No Content',
    description: 'The server has fulfilled the request but does not need to return an entity-body',
    difficulty: 'intermediate',
  },
  {
    code: 206,
    meaning: 'Partial Content',
    description: 'The server has fulfilled the partial GET request for the resource',
    difficulty: 'intermediate',
  },
  {
    code: 304,
    meaning: 'Not Modified',
    description: 'The resource has not been modified since the last request',
    difficulty: 'intermediate',
  },
  {
    code: 307,
    meaning: 'Temporary Redirect',
    description: 'The requested resource resides temporarily under a different URI',
    difficulty: 'intermediate',
  },
  {
    code: 308,
    meaning: 'Permanent Redirect',
    description: 'The target resource has been assigned a new permanent URI',
    difficulty: 'intermediate',
  },
  {
    code: 405,
    meaning: 'Method Not Allowed',
    description: 'The method specified in the Request-Line is not allowed',
    difficulty: 'intermediate',
  },
  {
    code: 408,
    meaning: 'Request Timeout',
    description:
      'The client did not produce a request within the time that the server was prepared to wait',
    difficulty: 'intermediate',
  },
  {
    code: 409,
    meaning: 'Conflict',
    description:
      'The request could not be completed due to a conflict with the current state of the resource',
    difficulty: 'intermediate',
  },
  {
    code: 422,
    meaning: 'Unprocessable Entity',
    description: 'The request was well-formed but was unable to be followed due to semantic errors',
    difficulty: 'intermediate',
  },
  {
    code: 429,
    meaning: 'Too Many Requests',
    description: 'The user has sent too many requests in a given amount of time',
    difficulty: 'intermediate',
  },
  {
    code: 502,
    meaning: 'Bad Gateway',
    description: 'The server received an invalid response from the upstream server',
    difficulty: 'intermediate',
  },
  {
    code: 504,
    meaning: 'Gateway Timeout',
    description: 'The server did not receive a timely response from the upstream server',
    difficulty: 'intermediate',
  },

  // Advanced level - Rare codes
  {
    code: 100,
    meaning: 'Continue',
    description: 'The client should continue with its request',
    difficulty: 'advanced',
  },
  {
    code: 102,
    meaning: 'Processing',
    description: 'The server has accepted the request, but has not yet completed it',
    difficulty: 'advanced',
  },
  {
    code: 206,
    meaning: 'Partial Content',
    description: 'The server has fulfilled the partial GET request for the resource',
    difficulty: 'advanced',
  },
  {
    code: 300,
    meaning: 'Multiple Choices',
    description: 'The requested resource has multiple representations',
    difficulty: 'advanced',
  },
  {
    code: 307,
    meaning: 'Temporary Redirect',
    description: 'The requested resource resides temporarily under a different URI',
    difficulty: 'advanced',
  },
  {
    code: 308,
    meaning: 'Permanent Redirect',
    description: 'The target resource has been assigned a new permanent URI',
    difficulty: 'advanced',
  },
  {
    code: 402,
    meaning: 'Payment Required',
    description: 'Reserved for future use',
    difficulty: 'advanced',
  },
  {
    code: 406,
    meaning: 'Not Acceptable',
    description: 'The resource is not available in a format acceptable to the client',
    difficulty: 'advanced',
  },
  {
    code: 410,
    meaning: 'Gone',
    description: 'The requested resource is no longer available and will not be available again',
    difficulty: 'advanced',
  },
  {
    code: 411,
    meaning: 'Length Required',
    description: 'The request did not specify the length of its content',
    difficulty: 'advanced',
  },
  {
    code: 413,
    meaning: 'Payload Too Large',
    description: 'The request is larger than the server is willing or able to process',
    difficulty: 'advanced',
  },
  {
    code: 415,
    meaning: 'Unsupported Media Type',
    description: 'The request entity has a media type which the server does not support',
    difficulty: 'advanced',
  },
  {
    code: 418,
    meaning: "I'm a teapot",
    description: 'The server refuses to brew coffee because it is a teapot (April Fools joke)',
    difficulty: 'advanced',
  },
  {
    code: 422,
    meaning: 'Unprocessable Entity',
    description: 'The request was well-formed but was unable to be followed due to semantic errors',
    difficulty: 'advanced',
  },
  {
    code: 451,
    meaning: 'Unavailable For Legal Reasons',
    description: 'The server is denying access to the resource as a consequence of a legal demand',
    difficulty: 'advanced',
  },
  {
    code: 501,
    meaning: 'Not Implemented',
    description: 'The server does not support the functionality required to fulfill the request',
    difficulty: 'advanced',
  },
  {
    code: 502,
    meaning: 'Bad Gateway',
    description: 'The server received an invalid response from the upstream server',
    difficulty: 'advanced',
  },
  {
    code: 504,
    meaning: 'Gateway Timeout',
    description: 'The server did not receive a timely response from the upstream server',
    difficulty: 'advanced',
  },
  {
    code: 507,
    meaning: 'Insufficient Storage',
    description: 'The server is unable to store the representation needed to complete the request',
    difficulty: 'advanced',
  },
  {
    code: 511,
    meaning: 'Network Authentication Required',
    description: 'The client needs to authenticate to gain network access',
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
