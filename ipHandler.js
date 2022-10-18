// the purpose of this script is to get the currentIp from the server
const getCurrIp = async () => {
    // assumptions - there is already a mongoDb coloumn that has the currentIp written in it
    // that is always asuumed to be an axiom and it is not the responsibility of this script to ensure that

    // flow 
    // get the latest Ip from mongoDB
    // return it

    // put your mongo url here
    let mongodb_uri;
    const { MongoClient } = require("mongodb");
    const client = new MongoClient(mongodb_uri);
                                
    await client.connect();
    const db = client.db("IP");
    const collection = db.collection('IP');

    const a = await collection.findOne();
    client.close();
    return a.IP;
}

module.exports = {
    getCurrIp
}

if(require.main === module){
    const main = async () => {
        const ip = await getCurrIp();
        console.log(ip);
    }
    main();
}