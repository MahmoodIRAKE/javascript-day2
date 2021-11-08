function boom(n) {
    let i = 1;
    while (i < n) {
        if (i % 7 === 0) {
            if (i.toString().includes("7") === true) {
                console.log("BOOM-BOOM" + ',');
            } else {
                console.log("BOOM" + ',');
            }

        } else {
            console.log(i + ',')

        }
        i++;
    }
    return;
}

boom(18);
console.log("second test");
boom(99);