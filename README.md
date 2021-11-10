# prisma-transaction-bug

## Prerequisites

Ensure the following dependencies are available on your system:

- `make`
- `node`
- `yarn`
- `docker`

## Setting up

Run `make run` to build and run the docker container and spin up a postgres instance.
It'll take a little bit of time for the container to boot after the command finishes.
You can use `docker-compose logs -f` to see if the container finished booting, looking for the
following log message:

```
{"level":30,"time":1636546552706,"pid":497,"hostname":"3f96934f320b","msg":"Server listening at http://[::]:8000"}
```

Alternatively, you can open `http://localhost:8000/api/v1/endpoint` in a browser and wait for it to become available.


## Running the stress test

Once the service is up and running, you can run the stress test by running `make stress`. It'll perform 3x250 requests
to the service. With a docker setup of 4 CPUs and 4GB Memory, the process locks up after about 350 requests. It can differ
a little between machines.

## Notes:

Whilst building this app for reproducing the issue, we found that the issue only appears if we include the following preview
features in the schema:

```
  previewFeatures = ["interactiveTransactions"]
```

So it appears that enabling interactiveTransactions breaks normal $transaction flows.