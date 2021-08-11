// Details of Prize Draw Methodology Encrypted here on 01 August 2021:
// https://github.com/MeebitsDAO/Aardvark/wiki/Encrypted-message

// EXAMPLE HASHLIST WILL BE UPDATED WITH REAL DATA
const hashlist = [
    "0x6adcbb75293195039d7dbee0329fd50d07f6086d22a12f137106a1e017356d11",
    "0x7690c6ea7831f22d597e0176fe78f16de024ac0cf631a4d322358642922b4968",
    "0x2478403dc24baa3bf3610c07608ff350b8ebb9b8f19cc560e6be66eb668aeba6",
    "0xd3f03f954f3d379082b5c12a5b9ccb4412c4dd7f3bb62d0247add4cb08a3e2e5",
    "0xb3eb3db4b28a99da873c6f3dc23d2db8f4022d7a88c80f18a4531837df7fa5f5",
    "0x85cd838272118177c71051e2c23e7fb2cea53ca031321d575f69e63ddd9b75f8",
    "0x8e02362656263e64ecb347aa3920b1a6ddb07cd1c6a8fba91ce82b2c1da2522f",
    "0x9123d6d6d41e417c459c929accb9e4dadc7791e524b05ce7342d036db8e9b31d",
    "0x79070aa830891dee36183e66fbb9ed06fb3ef17f8d44a65cb002fd9a82f78d4f",
    "0xf3daeaeb4dfbb3229fcde0a3a443e2b5b1afa73d9dae35bd1f42974baba1f647",
    "0x79e4bb916fccae55dd1000871cc482e0128383875c5685bbd84773dc5d3d2500",
    "0x7a594bad1e07501b62a7935adc6b953452e6400f2068fc22376227d27672a197",
    "0x736fa3fbcaf83c39c90810e10ee791d2c275e422f1564f721764b8111dc9a183",
    "0xc88f0b95126e40c4a317c74b7a6d80992c7f1da01d80465724c71b28f8276575",
    "0xb3130f7df5fb6c1b9fb0b8024666ab9c23a196a3d6b89e8d378baf266013e9eb",
    "0xdf4595764feed9512b160400a4dd6aa065f70b489636a3bce783957fcd7a5a2e",
    "0x3a7c9782a812ce589a57355e1f0797d3dc69f72b7589bead688de7f624a1119f",
    "0xb682d662eb8ffed484d02885fd8567405180cbc5d45cffcfe6af12a1e7a39527",
    "0xc97137934839cd8ac789572ed39413bea8856e897df94497aee94b4587258845",
    "0x656d549b0bc6954e2e7aad5c5b508d1316ba00b881643562f70915b818d1ae1c",
    "0x9df5bfc7c5a22df0bd3068b99204098e3e1b84d46a24143ea63575c2404b60c4",
    "0x0debd88d5e1ae262632701e089dfa1526b5754be960c4970334ec27d68cb18b4",
    "0xa71c774667c80ee09aa6bef3553bc5523cd9b0f5ba77cce7f5d0529affc9120a",
    "0xeeb54efa73614999ec69ff7b1d4189c1c18c75cf349c31069040d01044e5e242"
]

const prizeRounds = [
    {
        nTickets: 4689,
        nPrizes: 35,
        seeds: hashlist.slice(0,8).map(o=>o.substring(2)).join('').match(/(.{1,8})/g).map(o=>`0x${o}`/0xffffffff),
        results: null
    },{
        nTickets: 622,
        nPrizes: 18,
        seeds: hashlist.slice(8,16).map(o=>o.substring(2)).join('').match(/(.{1,8})/g).map(o=>`0x${o}`/0xffffffff),
        results: null
    },{
        nTickets: 686,
        nPrizes: 35,
        seeds: hashlist.slice(16,24).map(o=>o.substring(2)).join('').match(/(.{1,8})/g).map(o=>`0x${o}`/0xffffffff),
        results: null
    }
]

const finalResults = prizeRounds.map(o=>{
    o.results = o.seeds.map(seed=>Math.floor(o.nTickets*seed)+1)
    // de-dupe & slice
    o.results = o.results.reduce( (prev,curr)=>{
        if(prev.indexOf(curr) === -1){
            prev.push(curr)
        }
        return prev
    },[]).slice(0,o.nPrizes)
    return o
})

