/**
 * Created by liwei.zhu on 16/12/28.
 */
import * as types from '../constants/ActionTypes'

const initialState = {
  userLevelInfo: {
    'tibean': '0',
    'experience': '0',
    'level': 'T1',
    'levels': [
      {
        'name': 'T1',
        'experience': '0',
        'privilege': [
          {
            'name': '泰豆翻倍',
            'url': 'https://www.baidu.com',
            'logoImg': 'http://customerapp.oss-cn-hangzhou.aliyuncs.com/c6/47/c602dea35d156bc5bf9f7cdfa9d39b341482304947.png',
            'status': '1',
            'multiple': '1'
          },
          {
            'name': '消费抵现',
            'url': 'https://www.baidu.com',
            'logoImg': 'http://customerapp.oss-cn-hangzhou.aliyuncs.com/f2/99/f2a0c0b2ce5b959c1ba9d5e07fdc5a751482301999.png',
            'status': '0'
          },
          {
            'name': '生日礼包',
            'url': 'https://www.baidu.com',
            'logoImg': 'http://customerapp.oss-cn-hangzhou.aliyuncs.com/da/98/da758beb0d5383d4c04331abd38705321482301998.png',
            'status': '0'
          }
        ],
        'status': '1',
        'logoImg': 'http://customerapp.oss-cn-hangzhou.aliyuncs.com/e6/97/e6f75a4d9afda893e42aa04b29be589e1482301997.png',
        'percent': '0'
      },
      {
        'name': 'T2',
        'experience': '26',
        'privilege': [
          {
            'name': '泰豆翻倍',
            'url': 'https://www.baidu.com',
            'logoImg': 'http://customerapp.oss-cn-hangzhou.aliyuncs.com/c5/48/c5f7c4cd91e2d08bcbb5d6e1a80d1d8c1482304948.png',
            'status': '1',
            'multiple': '1.5'
          },
          {
            'name': '泰豆抽奖',
            'url': 'https://www.baidu.com',
            'logoImg': 'hangzhou.aliyuncs.com/6b/99/6b53ea7ac0b5809a9f9b2872b3148e8b1482301999.png',
            'status': '1'
          },
          {
            'name': '消费抵现',
            'url': 'https://www.baidu.com',
            'logoImg': 'http://customerapp.oss-cn-hangzhou.aliyuncs.com/6b/99/6b53ea7ac0b5809a9f9b2872b3148e8b1482301999.png',
            'status': '1'
          },
          {
            'name': '生日礼包',
            'url': 'https://www.baidu.com',
            'logoImg': 'http://customerapp.oss-cn-hangzhou.aliyuncs.com/da/98/da758beb0d5383d4c04331abd38705321482301998.png',
            'status': '0'
          }
        ],
        'status': '0',
        'percent': '0',
        'logoImg': 'http://customerapp.oss-cn-hangzhou.aliyuncs.com/e5/96/e56d2ebf3b766ff087442e4827ff41441482301996.png'
      },
      {
        'name': 'T3',
        'experience': '526',
        'privilege': [
          {
            'name': '泰豆翻倍',
            'url': 'https://www.baidu.com',
            'logoImg': 'http://customerapp.oss-cn-hangzhou.aliyuncs.com/55/48/5568940a6a80082680366c6671e27b7a1482304948.png',
            'status': '1',
            'multiple': '2'
          },
          {
            'name': '泰豆抽奖',
            'url': 'https://www.baidu.com',
            'logoImg': 'hangzhou.aliyuncs.com/6b/99/6b53ea7ac0b5809a9f9b2872b3148e8b1482301999.png',
            'status': '1'
          },
          {
            'name': '消费抵现',
            'url': 'https://www.baidu.com',
            'logoImg': 'http://customerapp.oss-cn-hangzhou.aliyuncs.com/6b/99/6b53ea7ac0b5809a9f9b2872b3148e8b1482301999.png',
            'status': '1'
          },
          {
            'name': '生日礼包',
            'url': 'https://www.baidu.com',
            'logoImg': 'http://customerapp.oss-cn-hangzhou.aliyuncs.com/81/99/81b44cce64035e1709713b270c431f731482301999.png',
            'status': '1'
          }
        ],
        'status': '0',
        'percent': '0',
        'logoImg': 'http://customerapp.oss-cn-hangzhou.aliyuncs.com/9b/96/9babc17cf9975c7ae7f502e654aef7c91482301996.png'
      },
      {
        'name': 'T4',
        'experience': '1926',
        'privilege': [
          {
            'name': '泰豆翻倍',
            'url': 'https://www.baidu.com',
            'logoImg': 'http://customerapp.oss-cn-hangzhou.aliyuncs.com/75/48/756c3b1f8774e15cff7e9be818709e451482304948.png',
            'status': '1',
            'multiple': '3'
          },
          {
            'name': '泰豆抽奖',
            'url': 'https://www.baidu.com',
            'logoImg': 'hangzhou.aliyuncs.com/6b/99/6b53ea7ac0b5809a9f9b2872b3148e8b1482301999.png',
            'status': '1'
          },
          {
            'name': '消费抵现',
            'url': 'https://www.baidu.com',
            'logoImg': 'http://customerapp.oss-cn-hangzhou.aliyuncs.com/6b/99/6b53ea7ac0b5809a9f9b2872b3148e8b1482301999.png',
            'status': '1'
          },
          {
            'name': '生日礼包',
            'url': 'https://www.baidu.com',
            'logoImg': 'http://customerapp.oss-cn-hangzhou.aliyuncs.com/81/99/81b44cce64035e1709713b270c431f731482301999.png',
            'status': '1'
          }
        ],
        'status': '0',
        'percent': '0',
        'logoImg': 'http://customerapp.oss-cn-hangzhou.aliyuncs.com/3e/97/3e0747fb6d137f158c344b2341dcc74d1482301997.png'
      },
      {
        'name': 'T5',
        'experience': '8326',
        'privilege': [
          {
            'name': '泰豆翻倍',
            'url': 'https://www.baidu.com',
            'logoImg': 'http://customerapp.oss-cn-hangzhou.aliyuncs.com/31/48/31970f3db445af0f7c6aa6cb69b6a65d1482304948.png',
            'status': '1',
            'multiple': '4'
          },
          {
            'name': '泰豆抽奖',
            'url': 'https://www.baidu.com',
            'logoImg': 'hangzhou.aliyuncs.com/6b/99/6b53ea7ac0b5809a9f9b2872b3148e8b1482301999.png',
            'status': '1'
          },
          {
            'name': '消费抵现',
            'url': 'https://www.baidu.com',
            'logoImg': 'http://customerapp.oss-cn-hangzhou.aliyuncs.com/6b/99/6b53ea7ac0b5809a9f9b2872b3148e8b1482301999.png',
            'status': '1'
          },
          {
            'name': '生日礼包',
            'url': 'https://www.baidu.com',
            'logoImg': 'http://customerapp.oss-cn-hangzhou.aliyuncs.com/81/99/81b44cce64035e1709713b270c431f731482301999.png',
            'status': '1'
          }
        ],
        'status': '0',
        'percent': '0',
        'logoImg': 'http://customerapp.oss-cn-hangzhou.aliyuncs.com/d5/97/d5aad3d3579e825cd825bfc4d0179f771482301997.png'
      }
    ],
    'nickname': '',
    'avatar': ''
  },
  userLevelInfoIsLoad: false,
  tibeanData: {
    'total': '0',
    'reward': '0',
    'consume': '0',
    'nextPage': '-1',
    'logs': []
  },
  tibeanNullFlag: false,
  experienceData:  {
    'helpUrl': '',
    'total': '0',
    'logs': [],
    'nextPage': '-1'
  },
  levelRule: [
    {
      'name': 'T1',
      'privilege': [
        {
          'name': '泰豆翻倍',
          'status': '1',
          'multiple': '1'
        },
        {
          'name': '泰豆抽奖',
          'status': '1',
          'multiple': '0'
        },
        {
          'name': '消费抵现',
          'status': '0',
          'multiple': '0'
        },
        {
          'name': '生日礼包',
          'status': '0',
          'multiple': '0'
        }
      ]
    },
    {
      'name': 'T2',
      'privilege': [
        {
          'name': '泰豆翻倍',
          'status': '1',
          'multiple': '1.5'
        },
        {
          'name': '泰豆抽奖',
          'status': '1',
          'multiple': '0'
        },
        {
          'name': '消费抵现',
          'status': '1',
          'multiple': '0'
        },
        {
          'name': '生日礼包',
          'status': '0',
          'multiple': '0'
        }
      ]
    },
    {
      'name': 'T3',
      'privilege': [
        {
          'name': '泰豆翻倍',
          'status': '1',
          'multiple': '2'
        },
        {
          'name': '泰豆抽奖',
          'status': '1',
          'multiple': '0'
        },
        {
          'name': '消费抵现',
          'status': '1',
          'multiple': '0'
        },
        {
          'name': '生日礼包',
          'status': '1',
          'multiple': '0'
        }
      ]
    },
    {
      'name': 'T4',
      'privilege': [
        {
          'name': '泰豆翻倍',
          'status': '1',
          'multiple': '3'
        },
        {
          'name': '泰豆抽奖',
          'status': '1',
          'multiple': '0'
        },
        {
          'name': '消费抵现',
          'status': '1',
          'multiple': '0'
        },
        {
          'name': '生日礼包',
          'status': '1',
          'multiple': '0'
        }
      ]
    },
    {
      'name': 'T5',
      'privilege': [
        {
          'name': '泰豆翻倍',
          'status': '1',
          'multiple': '4'
        },
        {
          'name': '泰豆抽奖',
          'status': '1',
          'multiple': '0'
        },
        {
          'name': '消费抵现',
          'status': '1',
          'multiple': '0'
        },
        {
          'name': '生日礼包',
          'status': '1',
          'multiple': '0'
        }
      ]
    }
  ],
  amountRule:  [
    {
      'amountStart': '0',
      'amountEnd': '200',
      'tibean': '1'
    },
    {
      'amountStart': '200',
      'amountEnd': '500',
      'tibean': '1.5'
    },
    {
      'amountStart': '500',
      'amountEnd': '1000',
      'tibean': '1.7'
    },
    {
      'amountStart': '1000',
      'amountEnd': '9999999',
      'tibean': '2'
    }
  ]
}
const home=(state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_LEVELINFO:
      return Object.assign({}, state, {userLevelInfo:action.userLevelInfo})
    case types.SET_USER_LEVEL_INFO_ISLOAD:
      return Object.assign({}, state, {userLevelInfoIsLoad:action.userLevelInfoIsLoad})
    case types.SET_TIBEAN_DATA:
      return Object.assign({}, state, {tibeanData:action.tibeanData})
    case types.SET_TIBEAN_NULL_FLAG:
      return Object.assign({}, state, {tibeanNullFlag:action.tibeanNullFlag})
    case types.SET_EXPERIENCE_DATA:
      return Object.assign({}, state, {experienceData:action.experienceData})
    case types.SET_LEVEL_RULE:
      return Object.assign({}, state, {levelRule:action.levelRule})
    case types.SET_AMOUNT_RULE:
      return Object.assign({}, state, {amountRule:action.amountRule})
    default:
      return initialState
  }
}

export default home
