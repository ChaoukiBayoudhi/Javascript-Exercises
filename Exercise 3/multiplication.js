function multiplicationTable(N)
{
    /* N=3
        x 1 2 3
        1 1 2 3
        2 2 4 6
        3 3 6 9
    */
   /*<table>
        <tr>
                <th></th>
        </tr>
       <tr>
           <td>2</td>
           <td>3</td>
       </tr>
       <tr></tr>
   </table>
   */
  document.write("<center><table border=1px style='text-align:center'>");
  document.write("<tr style='font-size:25px;color:red;background-color:black;font-weight:bold'>");
  document.write("<td>X</td>");
  for (let i = 1; i <=N; i++) {
    document.write("<td >"+i+"</td>");
      
  }
  document.write("</tr>");
  for (let i =1;i<=N;i++) //parcourir les lignes
  {
      let bkColor="aqua";
      if(i%2==0)
      bkColor="blue";
    document.write("<tr style='background-color:"+bkColor+"'>");
    document.write("<td style='font-size:25px;color:red;background-color:black;font-weight:bold'>"+i+"</td>");
    for(let j=1;j<=N;j++) //parcours les colonnes
    {
        document.write("<td>"+i*j+"</td>");
    }
    document.write("</tr>");
  }
  document.write("</table></center>");
}
let n=prompt('introduce N');
multiplicationTable(n);
