function even_odd(num) {
    even_sum = 0;
    odd_sum = 0;
    even_count = 0;
    odd_count = 0;
    for (let i of num) {
        if (i % 2 == 0) {
            even_sum += i;
            even_count++;
        }
        else {
            odd_sum += i;
            odd_count++;
        }
    }
    console.log('Even numbers average: ' + even_sum / even_count, 'odd numbers average: ' + odd_sum / odd_count);
}

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
even_odd(numbers);