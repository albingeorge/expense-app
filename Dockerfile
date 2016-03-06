FROM ubuntu:14.04.2

RUN apt-get update && apt-get install -y nodejs build-essential npm

RUN ln -s /usr/bin/nodejs /usr/bin/node

RUN npm install -g forever

RUN mkdir /src

ADD src/package.json /tmp

RUN cd /tmp && npm install

RUN cp -a /tmp/node_modules /src/

ADD src /src/

ADD docker.sh /src/docker.sh

RUN chmod +x /src/docker.sh

RUN cd /src

EXPOSE 3000

# CMD ["/bin/bash"]
ENTRYPOINT "/src/docker.sh"
