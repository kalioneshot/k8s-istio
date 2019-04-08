package com.kali.sample.exception;

/**
 * Business exception.
 * 
 * @author kali
 *
 */
public class BusinessException extends MicroServiceException {

	/**
	 * serialVersionId.
	 */
	private static final long serialVersionUID = -8317579676512829576L;

	/**
	 * Default constructor (for serialization)
	 */
	public BusinessException() {
		super();
	}

	/**
	 * Constructor.
	 *
	 * @param message   : exception message.
	 * @param exception : exception.
	 */
	protected BusinessException(String message, Throwable exception) {
		super(message, exception);
	}

	/**
	 * Constructor.
	 *
	 * @param code      : exceptionId.
	 * @param message   : exception message.
	 * @param exception : exception.
	 */
	protected BusinessException(String code, String message, Throwable exception) {
		super(code, message, exception);
	}

	/**
	 * Constructor.
	 *
	 * @param exception : exception.
	 */
	protected BusinessException(Throwable exception) {
		super(exception);
	}

	/**
	 * Constructor.
	 *
	 * @param code    : exception Id.
	 * @param message : exception message.
	 */
	protected BusinessException(String code, String message) {
		super(code, message);
	}
}
