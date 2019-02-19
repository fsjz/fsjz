const markdownPlugins = require('./lib/markdownPlugins');

const config = {
    projectName: 'fsjz',
    title: '方氏家族',
    favicon: 'img/favicon.ico',
    logo: 'img/logo.png',
    colors: {
        primaryColor: '#FF8C00',
        secondaryColor: '#F0E68C',
        activeColor: '#FF4040',
        tintColor: '#005068'
    },
    highlight: {
        theme: 'solarized-dark'
    },
    documentPath: 'docs', //默认为docs
    markdownPlugins,
    styles: ['css/resume.css'],
    scripts: [],
    footer: 'lib/Footer.js', //设置footer
    sideNavCollapsible: true, // 侧边栏是否可以折叠
    homePage: {
        name: '方氏家族',
        path: 'index.md'
    },
    menus: [
        {
            name: '祭祖',
            groups: [
                {
                    name: '祭祖规则',
                    pages: [
                        { name: '人员安排', path: 'sacrifice/rules/duty.md' },
                        { name: '斗钱规则', path: 'sacrifice/rules/raise.md' },
                        { name: '人员名单', path: 'sacrifice/rules/members.md' },
                    ]
                },
                {
                    name: '斗钱记录',
                    pages: [
                        { name: '2019', path: 'sacrifice/logs/2019.md'}
                    ]
                },
            ]
        },
        {
            name: '家谱',
            groups: [
                {
                    name: '定字辈',
                    pages: [
                        { name: '方定基', path: 'family/ding/fang_ding_ji.md' },
                        { name: '方定乾', path: 'family/ding/fang_ding_qian.md' },
                        { name: '方定古', path: 'family/ding/fang_ding_gu.md' },
                        { name: '方吉古之妻', path: 'family/ding/wu_shi.md' },
                    ]
                },
                {
                    name: '吉字辈',
                    pages: [
                        { name: '方吉才', path: 'family/ji/fang_ji_cai.md' },
                        { name: '方吉才之妻', path: 'family/ji/li_shi.md' },
                    ]
                },
                {
                    name: '昌字辈',
                    pages: [
                        { name: '方昌明', path: 'family/chang/fang_chang_ming.md' },
                        { name: '方昌明之妻', path: 'family/chang/guo_da_xian.md' },
                        { name: '方昌英(女)', path: 'family/chang/fang_chang_ying.md' },
                        { name: '方昌伦', path: 'family/chang/fang_chang_lun.md' },
                        { name: '方昌伦之妻', path: 'family/chang/liu_ying_zhen.md' },
                    ]
                },
                {
                    name: '太字辈',
                    pages: [
                        { name: '方太忠', path: 'family/tai/fang_tai_zhong.md' },
                        { name: '方太成', path: 'family/tai/fang_tai_cheng.md' },
                        { name: '方太国', path: 'family/tai/fang_tai_guo.md' },
                        { name: '方太加', path: 'family/tai/fang_tai_jia.md' },
                        { name: '方太军', path: 'family/tai/fang_tai_jun.md' },
                        { name: '方太华', path: 'family/tai/fang_tai_hua.md' },
                        { name: '方太强', path: 'family/tai/fang_tai_qiang.md' },
                        { name: '方太文', path: 'family/tai/fang_tai_wen.md' },
                        { name: '方太福', path: 'family/tai/fang_tai_fu.md' },
                    ]
                },
                {
                    name: '运字辈',
                    pages: [
                        { name: '方运红', path: 'family/yun/fang_yun_hong.md'},
                        { name: '方运辉', path: 'family/yun/fang_yun_hui.md'},
                        { name: '方运飞', path: 'family/yun/fang_yun_fei.md'},
                        { name: '方运勇', path: 'family/yun/fang_yun_yong.md'},
                        { name: '方运江', path: 'family/yun/fang_yun_jiang.md'},
                        { name: '方运进', path: 'family/yun/fang_yun_jin.md'},
                        { name: '方运模', path: 'family/yun/fang_yun_mu.md'},
                        { name: '方运德', path: 'family/yun/fang_yun_de.md'},
                        { name: '方运波', path: 'family/yun/fang_yun_bo.md'},
                        { name: '方运杰', path: 'family/yun/fang_yun_jie.md'},
                        { name: '方林', path: 'family/yun/fang_lin.md'},
                        { name: '方运忠', path: 'family/yun/fang_yun_zhong.md'},
                        { name: '方运久', path: 'family/yun/fang_yun_jiu.md'},
                        { name: '方运培', path: 'family/yun/fang_yun_pei.md'},
                        { name: '方运刚', path: 'family/yun/fang_yun_gang.md'},
                        { name: '方运松', path: 'family/yun/fang_yun_song.md'},
                    ]
                },
                {
                    name: '永字辈',
                    pages: [
                        { name: '方俊', path: 'family/yong/fang_jun.md'},
                        { name: '方华', path: 'family/yong/fang_hua.md'},
                        { name: '方梓鸥', path: 'family/yong/fang_zi_ou.md'},
                        { name: '方永圣', path: 'family/yong/fang_yong_sheng.md'},
                        { name: '方远航', path: 'family/yong/fang_yuan_hang.md'},
                        { name: '方浩轩', path: 'family/yong/fang_hao_xuan.md'},
                        { name: '方浩宇', path: 'family/yong/fang_hao_yu.md'},
                        { name: '方梓腾', path: 'family/yong/fang_zi_teng.md'},
                        { name: '方辰逸', path: 'family/yong/fang_chen_yi.md'},
                        { name: '方远程', path: 'family/yong/fang_yuan_cheng.md'},
                    ]
                },
            ]
        },
    ]
};

module.exports = config;
