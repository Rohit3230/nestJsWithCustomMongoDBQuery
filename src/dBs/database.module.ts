import { Module } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';

@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (): Promise<Db> => {
        try {
          let mongoDbStr : string; 
          // mongoDbStr = 'mongodb://Rohit3230:rsn3230@ds137826.mlab.com:37826/node-crud';
          mongoDbStr = 'mongodb://public:public@ds137826.mlab.com:37826/node-crud';
          const client = await MongoClient.connect(mongoDbStr, {
            useUnifiedTopology: true
          });

          return client.db('node-crud');
        } catch (e) {
          throw e;
        }
      }
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}