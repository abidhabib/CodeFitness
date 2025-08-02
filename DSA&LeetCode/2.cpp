// #include <iostream>
// using namespace std;
// int main(){

//     int a=2,b=3;
//     if((a=3)==b && isdigit(b)){
//         cout<<"EQUAL"<<endl;

//     }
//     else {
//         cout<<"!NOTEQUAL";
//     }

// }




// #include <iostream>
// using namespace std;
// int main()
// {
// char a;
// cout<<"Enter Some Thing"<<endl;
// cin >> a;
// cout<<"You entered"<<a<<endl;
// if(a>='0' && a<='9'){
//     cout<<"Number"<<endl;
// }
// else if (a>='A'&&a<='Z'){
//     cout<<"UPERCASE"<<endl;
// }
// else{
//     cout<<"Special Chars";
// }


// }
#include <iostream>
using namespace std;
 void print10(int num , int table){
     for(int i=1;i<=num;i++){
        cout<<table<< "*" <<i<<"="<<i*table<<endl;
    }
}
int main(){
  int table;

  cout<<"Table of \n";
cin>>table;
    print10(10,table);
   }


