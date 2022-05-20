import express from 'express'
import { routes } from './routes'
import cors from 'cors'

const app = express();

var whitelist = ['https://feedback-widget-nlw-web.vercel.app']
var corsOptions = {
    origin: function (origin: any, callback: any) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP server running!');
})