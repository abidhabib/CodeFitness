#include <iostream>
using namespace std;

int main() {
    int i = 29;
    bool isPrime = true;

    for (int j = 2; j * j <= i; j++) {
        cout << "Checking j = " << j 
             << " → " << j << "*" << j 
             << " = " << j * j << ", "
             << "i % j = " << i % j << endl;

        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }

    cout << i << (isPrime ? " is PRIME ✅" : " is NOT prime ❌") << endl;
}
