@echo off

:: Create the src directory structure
mkdir src\config
mkdir src\middlewares
mkdir src\services
mkdir src\controllers
mkdir src\routes
mkdir src\utils
mkdir src\validators

:: Create files in the config directory
echo // Prisma client instance > src\config\prisma.ts

:: Create files in the middlewares directory
echo // Middleware for authentication > src\middlewares\auth.ts

:: Create service files
echo // User service > src\services\user.service.ts
echo // Organization service > src\services\org.service.ts
echo // Project service > src\services\project.service.ts
echo // Team service > src\services\team.service.ts
echo // Issue service > src\services\issue.service.ts
echo // Comment service > src\services\comment.service.ts
echo // Notification service > src\services\notification.service.ts
echo // Analytics service > src\services\analytics.service.ts

:: Create controller files
echo // Authentication controller > src\controllers\auth.controller.ts
echo // User controller > src\controllers\user.controller.ts
echo // Organization controller > src\controllers\org.controller.ts
echo // Project controller > src\controllers\project.controller.ts
echo // Team controller > src\controllers\team.controller.ts
echo // Issue controller > src\controllers\issue.controller.ts
echo // Comment controller > src\controllers\comment.controller.ts
echo // Notification controller > src\controllers\notification.controller.ts
echo // Analytics controller > src\controllers\analytics.controller.ts

:: Create route files
echo // Authentication routes > src\routes\auth.routes.ts
echo // User routes > src\routes\user.routes.ts
echo // Organization routes > src\routes\org.routes.ts
echo // Project routes > src\routes\project.routes.ts
echo // Team routes > src\routes\team.routes.ts
echo // Issue routes > src\routes\issue.routes.ts
echo // Comment routes > src\routes\comment.routes.ts
echo // Notification routes > src\routes\notification.routes.ts
echo // Analytics routes > src\routes\analytics.routes.ts

:: Create app and server files
echo // Express app instance > src\app.ts
echo // Entry point > src\server.ts

:: Create the environment files
echo # Environment variables > .env
echo {
    "watch": ["src"],
    "ext": "ts",
    "exec": "ts-node ./src/server.ts"
} > nodemon.json

echo Folder structure created successfully!
