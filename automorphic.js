function automorphic(number){
    const last_digit1 = number%10;//last digit of the given number
    const last_digit2 = (number*number)%10;//last digit of the given number's square
  if(last_digit1 === last_digit2){
      return true;}
      else return false;
}
const given_number = 18;
console.log(automorphic(given_number));
//