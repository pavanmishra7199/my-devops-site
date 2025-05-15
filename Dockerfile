<<<<<<< HEAD
# Step 1: Use the official nginx image from Docker Hub
FROM nginx:alpine

# Step 2: Copy all your project files into nginx's public directory
COPY . /usr/share/nginx/html

# Step 3: Tell Docker to expose port 80
EXPOSE 80

# Step 4: Start nginx server
CMD ["nginx", "-g", "daemon off;"]
=======
# Step 1: Use the official nginx image from Docker Hub
FROM nginx:alpine

# Step 2: Copy all your project files into nginx's public directory
COPY . /usr/share/nginx/html

# Step 3: Tell Docker to expose port 80
EXPOSE 80

# Step 4: Start nginx server
CMD ["nginx", "-g", "daemon off;"]
>>>>>>> 546b974df132f7f472bcec3024e1d907ed6ceb7e
