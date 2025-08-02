#include <stdio.h>

int main() {
    int x, i, isPrime = 1;

    printf("Enter a number: ");
    scanf("%d", &x);

    if (x <= 1) {
        printf("%d is NOT a prime number\n", x);
        return 0;
    }

    for (i = 2; i * i <= x; i++) {
        if (x % i == 0) {
            isPrime = 0;
            break;
        }
    }

    if (isPrime)
        printf("%d is a PRIME number\n", x);
    else
        printf("%d is NOT a prime number\n", x);

    return 0;
}
