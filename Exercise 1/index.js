function primeNumbers(N) //find prime numbers between 1 and N
{
    for(let x=1;x<=N;x++)
    {
        if(isPrime(x))
         document.write(x + "<br>");
    }
}
function isPrime(x)  //return true if x is prime false else
{
    //12 --> 2, 3, 4, 6
    //28 -->2, 3,..14
    //25 --> 5=sqrt(25)
    //49 --> 7=sqrt(49)
    let i=2,prime=true;
  while(i<=Math.sqrt(x) && prime)//i are possibole divisor of x
  {
      if(x%i==0)
        prime=false;
    else
        i++;
  }
  return prime;
}

let N=prompt('introduce N');
primeNumbers(N);