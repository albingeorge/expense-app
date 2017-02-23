FROM ubuntu:14.04.2

RUN groupadd -r node && useradd -r -g node node


RUN rm -rf /var/lib/apt/lists/*
RUN apt-get clean && apt-get update
RUN apt-get install -y nodejs build-essential npm mongodb-clients vim

RUN ln -s /usr/bin/nodejs /usr/bin/node

RUN npm install pm2@latest -g

RUN mkdir /src

# Copy only package.json to /tmp and install from there
# so that, the next time when built, we do not have to download the entire modules
ADD src/package.json /tmp

#RUN cd /tmp && npm install

#RUN cp -a /tmp/node_modules /src/

ADD src /src/

ADD docker.sh /usr/local/bin/docker.sh

RUN chmod +x /usr/local/bin/docker.sh

RUN cd /src

EXPOSE 3000

# CMD ["/bin/bash"]
ENTRYPOINT "/usr/local/bin/docker.sh"
