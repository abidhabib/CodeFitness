#include <iostream>
using namespace std;
int main(){
int count=0,numTo;
cout<<"Enter Len \n";
cin>>numTo;
for(int i=2; i<=numTo-1;i++){
    bool isPrime=true;
    for(int j=2 ; j*j<numTo-1;j++){
    if(numTo%j==0){
        isPrime=false;
    break;
    }
    }
    if(isPrime){
    cout<<"Prime \n";
count=count+1;
    }

    else
    cout<<"Not Prime \n";
}
cout<<"total "<<count<<endl;
return 0;

}