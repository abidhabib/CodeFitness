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
void print7(int n){

    for(int i=1; i<=n; i++){
        for(int j=1; j<=9; j++){
            if(j<=6-i || j>=4+i)
            cout<<"*";
            else
            cout<<" ";
        }
        cout<<endl;
    }


}
void print8(int n){
    // print this shape
//     1    
//    121
//   12321
//  1234321
    for(int i=1; i<=n; i++){
            int k=1;

        for(int j=1; j<=7; j++){
            if(j>=5-i && j<=3+i){
                
                    /* code */ 
                    cout<<k;
                                            j<4?k++:k--;
       
            }       
                
            else
            cout<<" ";
       
 
            }
        cout<<endl;
        }
    
}
void print9(int n){

for(int i=1;i<=n;i++){
for(int j=1;j<=9;j++){

if(j>=7-i && j<=3+i)
cout<<" ";
else
cout<<"*";
}

cout<<endl;

}
}


void print10(int n){

    for (int i=1;i<=n;i++){
        for(int j=1; j<=i; j++){
            cout<<i;


        }
        cout<<endl;



    }
}
void print11(int n){
    int count =1;
    for (int i=1;i<=n;i++){
        for(int j=1; j<=i; j++){
            cout<<count++;


        }
        cout<<endl;



    }
}

int main(){



      int n=4;

    // print(n);
    // print4(n);
    // print3(9);
    // print6(n);
    // print8(n);
    // print7(n);
    // print5(n);
    // print2(n);
    // cout<<"----------------"<<endl;
    // print9(n);
    // print10(n);
       print11(n);


    return 0;


}

