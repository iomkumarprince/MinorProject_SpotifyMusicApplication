package com.example.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.filter.GenericFilterBean;

import java.io.IOException;

public class TrackFilter extends GenericFilterBean {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
        HttpServletResponse httpServletResponse = (HttpServletResponse) servletResponse;
        String authHeader = httpServletRequest.getHeader("Authorization");

        System.out.println("It is from Jwt " + authHeader);

        if (authHeader == null || !authHeader.startsWith("Bearer")) {
            throw new ServletException("Token is Missing");
        } else {
            String token = authHeader.substring(7);

            try {
                Claims claims = Jwts.parser().setSigningKey("jwtKey").parseClaimsJws(token).getBody();
                System.out.println("Retrieved Claims : " + claims);

                httpServletRequest.setAttribute("email", claims.get("emailId"));
                httpServletRequest.setAttribute("role", claims.get("role"));
                httpServletRequest.setAttribute("name", claims.get("firstName"));

                // Continue the filter chain
                filterChain.doFilter(httpServletRequest, httpServletResponse);
            } catch (JwtException e) {
                // Token validation failed
                httpServletResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

            }
        }
    }
}
