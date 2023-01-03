const a = (...args) => args.reduce((result,arg) => arg + result, 0)/args.length

const b = (...args) => args.reduce((result,arg,index) => index % 2 === 0 ? arg*args[index+1] + result : result, 0) / args.reduce((result,arg,index) => index % 2 === 0 ? result : arg + result, 0)

const c = (...args) => args.length % 2 === 0 ? (args[args.length/2]+args[args.length/2-1])/2 : args[-0.5 + args.length/2]

let countRepetitions = 0
let arrayNumberMostRepeated = []
let alreadyChecked = []

const d = (...args) => { args.forEach(element => { 
  if (alreadyChecked.filter(arg => arg === element).length === 0){
    alreadyChecked.push(element) 
    let testedArg = args.filter(arg => arg === element).length
    if (countRepetitions === testedArg) {
      arrayNumberMostRepeated.push(element)
    } else if (countRepetitions < testedArg) {
      countRepetitions = testedArg
      arrayNumberMostRepeated = [element]
    }
  }
})

finalCheck();}

const finalCheck = () => {
console.log(`O(s) número(s) ${arrayNumberMostRepeated} aparece(m) ${countRepetitions} vezes`);

arrayNumberMostRepeated = [];
alreadyChecked = [];
countRepetitions = 0;
}

