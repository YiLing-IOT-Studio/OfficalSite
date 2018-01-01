package com.iot.config;

import com.iot.service.officesite.MemberService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.thymeleaf.extras.springsecurity4.dialect.SpringSecurityDialect;
import org.thymeleaf.spring4.SpringTemplateEngine;
import org.thymeleaf.templateresolver.TemplateResolver;

/**
 * Created by 李攀 on 2017/12/3.
 */
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean
    UserDetailsService customUserService() {
        return new MemberService();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(customUserService());
    }

    //@Override
    //public void configure(WebSecurity web) throws Exception {
    //    web.ignoring().antMatchers("/js/**", "/img/**", "/css/**", "/fonts/**","/css1/**");
    //    web.ignoring().antMatchers("/**");
    //}

    @Bean
    public SpringTemplateEngine templateEngine(TemplateResolver templateResolver) {
        SpringTemplateEngine templateEngine = new SpringTemplateEngine();
        templateEngine.setTemplateResolver(templateResolver);
        templateEngine.addDialect(new SpringSecurityDialect());//注册安全方言
        return templateEngine;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.authorizeRequests()
                //.antMatchers("/*.html").permitAll()
                .and().formLogin().loginPage("/login").defaultSuccessUrl("/index",true).failureUrl("/fail").permitAll()
                .and().sessionManagement().invalidSessionUrl("/")
                .and().logout().deleteCookies("JSESSIONID")
                //.and().rememberMe().key("remember-me").rememberMeParameter("remember-me").tokenValiditySeconds(1209600)
                .and().logout().logoutSuccessUrl("/").permitAll();

        http.csrf().disable();
    }
}
