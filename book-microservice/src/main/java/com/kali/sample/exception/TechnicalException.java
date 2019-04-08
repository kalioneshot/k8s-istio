package com.kali.sample.exception;

/**
 * Technical Exception.
 * 
 * @author kali
 *
 */
public class TechnicalException extends MicroServiceException {

	/**
	 * serialVersionId.
	 */
	private static final long serialVersionUID = -8317579676512829576L;

	/**
	 * Default constructor (for serialization)
	 */
	public TechnicalException() {
		super();
	}

	/**
	 * Constructor.
	 *
	 * @param message   : exception message.
	 * @param exception : exception.
	 */
	protected TechnicalException(String message, Throwable exception) {
		super(message, exception);
	}

	/**
	 * Constructor.
	 *
	 * @param code      : exceptionId.
	 * @param message   : exception message.
	 * @param exception : exception.
	 */
	protected TechnicalException(String code, String message, Throwable exception) {
		super(code, message, exception);
	}

	/**
	 * Constructor.
	 *
	 * @param exception : exception.
	 */
	protected TechnicalException(Throwable exception) {
		super(exception);
	}

	/**
	 * Constructor.
	 *
	 * @param code    : exception Id.
	 * @param message : exception message.
	 */
	protected TechnicalException(String code, String message) {
		super(code, message);
	}
}
