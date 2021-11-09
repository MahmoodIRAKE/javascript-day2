const countryToLiveIn = (language, isIsland, population, country) => {
    //check for sarah
    if (language === "English" && population < 50 && !isIsland) {
        console.log(`You should live in ${country}`);
        return;
    }
    console.log(`${country} does not meet your criteria`);

}