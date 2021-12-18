             /*         ASSIGNMENT-2  ( PATTERNS )     */




/*    Q1- WAF that takes the N as input and prints out the following output - 
          n=1    n=2     n=3       n=4
           *      **      ***       ****
                  *       **        ***
                          *         ** 
                                    *        */


function pattern1(n) {
    res = '';
    for (let row = n; row > 0; row--) {

      for (let col = 1; col <= row; col++) {
            res += "*";

        }
      res += '\n';
    }
  return res;
}




/* Q2. WAF that takes N as input and prints out the following output -
    n=1     n=2     n=3       n=4
     *      * *     * * *    * * * *
              *       * *      * * * 
                        *        * *
                                   * 

*/



function pattern2(n){
   let res="";
   for(let row=1;row<=n;row++){
       let cols=n+1-row , space=n-cols;
       for(k=1;k<=space;k++){
               res+=" ";
        }
       for(let col=1;col<=cols;col++){
               res+="*";
        }
        res+="\n";

    }
  return res;
}






/* Q3. WAF that takes N as input and print out the following output -
    n=1      n=2     n=3       n=4
     *       *       *         *
             * *     * *       * *
                     * * *     * * *
                               * * * *
                                            */


  function pattern3(n){
    let res = '';
      for (let row = 1; row <=n; row++) {
         for (let col = 1; col <= row; col++) {
                 res += "*";
          }
          res += '\n';
      }
      return res;
  
  }





  /* Q4. WAF that takes N as input and print the following output-   
          n=1      n=2       n=3        n=4
           *         *         *          *
                   * *       * *        * *
                           * * *      * * *
                                    * * * *
  
   */


function pattern4(n){
  let res="";
  for(row=1;row<=n;row++){
    let cols=row, space=n-row;
    for(k=1;k<=space;k++){
       res+=" ";
    }
      for(col=1;col<=cols;col++){
          res+="*";
      }
      res+="\n";

  }
  return res;
}









/* Q5. WAF that takes N as input and print the following output-   
          n=1      n=2         n=4
           **      ****      ********
           **      *  *      ***  ***
                   *  *      **    **
                   ****      *      *
                             **    **
                             ***  ***
                             ********
 
*/



function pattern5(n) {
  let num=n;
  res = '';
 for (let i =1; i <= 2*num ; i++) {
    let cols=i<=num?num-i+1:i-num;
    let space=i<=num?2*num-2*cols:2*num-2*cols;
       for (let j =1 ; j <=cols ; j++) {
            res += "*";
        }
       for(k=1;k<=space;k++){
          res+=" ";

        }
       for(l=1;l<=cols;l++){
            res+="*";

        }
        res+="\n";
  
  }    

  return res;
}






