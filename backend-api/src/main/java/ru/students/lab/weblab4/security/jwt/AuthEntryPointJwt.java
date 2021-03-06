package ru.students.lab.weblab4.security.jwt;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;

@Component
public class AuthEntryPointJwt implements AuthenticationEntryPoint {
    private static final Logger LOG = LoggerFactory.getLogger(AuthEntryPointJwt.class);

    @Override
    public void commence(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException ex) throws IOException, ServletException {
        LOG.error("Ошибка авторизации: {}", ex.getMessage());

        httpServletResponse.setContentType("text/html; charset=UTF-8");
        httpServletResponse.setCharacterEncoding("UTF-8");
        httpServletResponse.setContentType(MediaType.APPLICATION_JSON_VALUE);
        httpServletResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        Writer out = httpServletResponse.getWriter();
        out.write("Ошибка авторизации! " + ex.getMessage());
        //httpServletResponse.getOutputStream().print("Ошибка авторизации! " + ex.getMessage());
        //httpServletResponse.getOutputStream().flush();
    }
}
