import { SMTPServer } from 'smtp-server';
import { simpleParser as parser } from 'mailparser';

const server = new SMTPServer({
  onData(stream, _session, callback) {
    parser(stream, {}, (err, parsed) => {
      if (err)
        console.log("Error:" , err);

      console.log(parsed);
      stream.on("end", callback);
    });

  },
  disabledCommands: ['AUTH']
});

server.listen(process.env.SMTP_PORT || 25);
