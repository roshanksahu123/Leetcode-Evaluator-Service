import express, {Express} from 'express';

import serverConfig from "./config/serverConfig";
import sampleQueueProducer from "./producers/sampleQueueProducer";
import apiRouter from "./routes";
import SampleWorker from "./workers/SampleWroker";

const app: Express = express();

app.use("/api", apiRouter);
app.listen(serverConfig.PORT, () => {
    console.log(`Server is started at port: ${serverConfig.PORT}`);

    SampleWorker('SampleQueue');
    sampleQueueProducer('SampleJob', {
        name: "Roshan",
        company: "Reach",
        position: "SDE",
        location: "BLR"
    });
});

