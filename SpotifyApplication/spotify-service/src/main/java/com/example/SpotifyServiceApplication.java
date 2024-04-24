package com.example;

import com.example.filter.TrackFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
@EnableFeignClients
@EnableDiscoveryClient
public class SpotifyServiceApplication {

	@Bean
	public FilterRegistrationBean jwtFilterBean(){
		FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
		filterRegistrationBean.setFilter(new TrackFilter());
		filterRegistrationBean.addUrlPatterns("/api/v2/addSong/*", "/api/v2/deleteSongById/*", "/api/v2/createPlaylist/*",
				"/api/v2/deletePlaylist/*", "/api/v2/deletePlaylist/*", "/api/v2/renamePlaylist/*", "/api/v2/addSongToPlaylist/*",
				"/api/v2/deleteSongFromPlaylist/*");
		return filterRegistrationBean;
	}

		public static void main(String[] args) {
		SpringApplication.run(SpotifyServiceApplication.class, args);
		System.out.println("=========== Spotify Service ==========");
	}

}
