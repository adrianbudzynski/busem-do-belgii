import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';

@Catch(NotFoundExceptionFilter)
export class NotFoundExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        console.error(exception);

        response
            .status(404)
            .render('error/any-exception', {
                exception: JSON.stringify(exception)
            });
    }
}