#include <iostream>
using namespace std;



// *
// **
// ***
// ****
// *****
 void print(int n){

    for(int i=1; i<=n; i++){
        for(int j=1; j<=i; j++){
            cout<<"*";
        }
        cout<<endl;
    }
 }

 void print2(int n){
// ----
// ---
// --
// -

for(int i=1; i<=n; i++){

for(int j=1; j<=n-i; j++){
    cout<<"-";
}

cout<<endl;

}
 }



void print3(int n){
    // *****
    //  ****
    //   ***
    //    **
    //     *


    for (int i=1; i<=5;i++){

        for(int j=1; j<=2*n-i;j++){
            if(j>=n-(i-1)&&j<=n+(i-1)){
                cout<<"*";
                
            }
            else{
                cout<<" ";
            }

        }
      
        
     
        cout<<endl;
    }
      for (int i=1; i<=5;i++){

        for(int j=1; j<=2*n-i;j++){
            if(j>=n-(5-i)&&j<=n+(5-i)){
                cout<<"*";
                
            }
            else{
                cout<<".";
            }

        }
      
        
     
        cout<<endl;
    }


}
void print4(int n){
    for (int i=1; i<=n;i++){


        for(int j=1;j<=n; j++){
            if(j>=i){
                cout<<"*";
            }
            else
            cout<<" ";
        }
        cout<<endl;
    }
}
void print5(int n){
for(int i=1; i<=n; i++){
    for(int j=1; j<=n; j++){
        if(j>=i)
        cout<<"*";

        else
        cout<<" ";
    }
 
    cout<<endl;
}

}

        void print6(int n){
            for(int i=1; i<=n; i++){
                for(int j=1; j<=9; j++){
                    if (j>=6-i && j<=4+i)
                    {
                        /* code */
                        cout<<"*";
                    }
                    else
                    cout<<" ";
                    
             
                }
                cout<<endl;
            }
        }


int main(){



      int n=5;
 
   
    //
    //   print(n);
    //       print4(n);

    //   print3(9);
    print6(n);
    return 0;
}

