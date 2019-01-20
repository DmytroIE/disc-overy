export const sourceOptionsMap = {
  IP: "IP",
  IPRange: "IPRange",
  CSVFile: "CSVFile"
};


export const sourceOptions = [
  { text: 'IP', value: sourceOptionsMap.IP},
  { text: 'IP Range', value: sourceOptionsMap.IPRange },
  { text: 'CSV File', value: sourceOptionsMap.CSVFile }
];


export const securityOptionsMap = {
  ANP: "Authentification and No Privacy",
  AO: "Authentification Only",
  AP: "Authentification and Privacy"
};

export const securityOptions = [
  {
    text: securityOptionsMap.ANP,
    value: securityOptionsMap.ANP,
  },
  { 
    text: securityOptionsMap.AO,
    value: securityOptionsMap.AO,
  },
  {
    text: securityOptionsMap.AP,
    value: securityOptionsMap.AP,
  }
];


export const steps = {
  SOURCE: 1,
  OPTIONS: 2,
  INPUT_DATA: 3,
  SUMMARY: 4
};

export const stepsNames = [
  {number: steps.SOURCE, text: 'Discovery Source'},
  {number: steps.OPTIONS, text:  'Discovery Options'},
  {number: steps.INPUT_DATA, text: 'Discovery Input Data'},
  {number: steps.SUMMARY, text: 'Summary'},
];

export const authCodes = [
  "MD5",
  "SHA",
  "HMAC128",
  "HMAC192",
  "HMAC256",
  "HMAC384"
];

export const SNMPVersions = [
  '1',
  '2',
  '3',
]

