FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# The first line of this file specifies that we want to use the latest version of the nginx image from Docker Hub.
# The next line copies the nginx.conf file from the local directory to the /etc/nginx directory in the container.
# The EXPOSE command exposes port 80 to the host machine.
# The CMD command specifies the command that should be run when the container starts. In this case, we are running the nginx command with the -g flag to run in the foreground.