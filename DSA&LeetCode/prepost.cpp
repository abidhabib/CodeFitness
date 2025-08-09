#include <iostream>
using namespace std;
int main(){
     
                
// cout<<(i++)<<endl; //print 5 and than increment(6)
// cout<<(++i)<<endl; // (1)increment and than print (7)
// cout<<(i--)<<endl; // print (7) than decrement 7-1
// cout<<(--i)<<endl; // (6-1)decrement and than print (5)
int i=1;
for(; ;){
    if(i<=5)
        cout<<i<<endl;
    else
        break;
   i++;
}

return 0;
}
