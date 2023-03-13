using System;
using System.Threading.Tasks.Dataflow;

int [] limit = { 3, -5, 4, -10, 20, 42 };
int musbet = 0;
int menfi = 0;
for(int i=0 ; i < limit.Length; i++){
    if (limit[i] >= 0)
    {
        musbet += limit[i];
    

}
    else if (limit[i] < 0)
    {
        menfi += limit[i];



}

}
Console.WriteLine(menfi);
Console.WriteLine(musbet);
