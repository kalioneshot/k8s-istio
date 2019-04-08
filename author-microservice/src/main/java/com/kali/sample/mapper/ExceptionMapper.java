package com.kali.sample.mapper;

import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

import org.eclipse.microprofile.rest.client.ext.ResponseExceptionMapper;

import com.kali.sample.exception.BusinessException;
import com.kali.sample.exception.MicroServiceException;
import com.kali.sample.exception.TechnicalException;

@Provider
public class ExceptionMapper implements ResponseExceptionMapper<MicroServiceException> {

	@Override
	public boolean handles(int statusCode, MultivaluedMap<String, Object> headers) {
		return statusCode == 404 // Not Found
				|| statusCode == 409; // Conflict
	}

	@Override
	public MicroServiceException toThrowable(Response response) {
		switch (response.getStatus()) {
		case 401:
		case 409:
			return new TechnicalException();
		case 502:
			return new BusinessException();
		}
		return null;
	}

}
